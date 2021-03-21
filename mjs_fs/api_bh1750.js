let BH1750 = {

    _create: ffi('void *mgos_bh1750_create(uint8_t)'),
    _close: ffi('void mgos_bh1750_free(void *)'),
    _read_lux: ffi('float mgos_bh1750_read_lux(void *)'),

    // ## **`BH1750.create(addr)`**
    // Create a BH1750 instance: an object with the methods described below.
    // `addr` is an i2c address of the BH1750 sensor.
    create: function (addr) {
        let obj = Object.create(BH1750._proto);
        obj.bh1750 = BH1750._create(addr);
        return obj.bh1750 ? obj : null;
    },

    _proto: {
        // ## **`myBH.read_lux()`**
        // Return the ambient light level in lux, or -1 in case of a failure.
        read_lux: function () {
            return BH1750._read_lux(this.bh1750);
        }
    },
};

