  /*
    Objects are collection of key-value pairs where values can be used in any type or in any function.
    */
    var car = {
        brand: "Toyota",
        model: "Corolla",
        year: 2020,
        getInfo: function () {
          return this.brand + " " + this.model;
        },
      };

      console.log(car.getInfo() + " was manfucturared in " + car.year);