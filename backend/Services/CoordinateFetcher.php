<?php

declare(strict_types=1);

namespace Internships\Services;

use Exception;
use GuzzleHttp\Client;
use Internships\CommandLine\ConsoleWriter;
use Internships\Models\FetchAddress;

class CoordinateFetcher
{
    protected string $mapboxToken;

    public function __construct(
        protected Client $api
    ) {
        $this->mapboxToken = $_ENV["MAPBOX_TOKEN"];
    }

    public function coordinatesFromAddress(
        string &$currentCoordinates,
        string $address = "",
        FetchAddress $addressObject = null
    ): bool {
        if ($addressObject) {
            $address = $this->fetchAddressToString($addressObject);
        }

        $addressUrl = urlencode($address);

        $url = "https://api.mapbox.com/geocoding/v5/mapbox.places/{$addressUrl}.json"
            . "?access_token={$this->mapboxToken}"
            . "&limit=1";

        try {
            $response = $this->api->get($url);
            $content = json_decode($response->getBody()->getContents(), true);
            $coordinates = $content["features"][0]["geometry"]["coordinates"];
        } catch (Exception $e) {
            ConsoleWriter::warn($e->getMessage());
            ConsoleWriter::warn(
                "Could not fetch coordinates for location {$address}."
                . "Check address or insert coordinates manually."
            );
            return false;
        }

        $currentCoordinates = "{$coordinates[1]},{$coordinates[0]}";
        return true;
    }

    public function fetchAddressToString(FetchAddress $addressObject): string
    {
        return implode(
            separator: ",",
            array: [
                $addressObject->getStreet(),
                $addressObject->getCity(),
                $addressObject->getCountry(),
                $addressObject->getZip(),
            ]
        );
    }
}
