<?php

declare(strict_types=1);

namespace Internships\Models;

use JsonSerializable;

class Coordinates implements JsonSerializable
{
    protected float $latitude;
    protected float $longitude;

    public function __construct(float $latitude, float $longitude)
    {
        $this->latitude = $latitude;
        $this->longitude = $longitude;
    }

    public function getLatitude(): float
    {
        return $this->latitude;
    }

    public function getLongitude(): float
    {
        return $this->longitude;
    }

    public function jsonSerialize(): array
    {
        return [
            "latitude" => $this->latitude,
            "longitude" => $this->longitude,
        ];
    }
}
