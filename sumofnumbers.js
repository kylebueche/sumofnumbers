class Sums {
  sumFor(list) {
    this.x = 0;
    for (this.i = 0; this.i < list.length; this.i++) {
      this.x += list[this.i];
    }
    return this.x;
  }

  sumWhile(list) {
    this.x = 0;
    this.i = 0;
    while (this.i < list.length) {
      this.x += list[this.i];
      this.i++;
    }
    return this.x;
  }

  sumRecursionHelper(
    list,
    index,
  ) {
    if (index < list.length) {
      return list[index] + this.sumRecursionHelper(list, index + 1);
    }
    return 0;
  }

  sumRecursion(list) {
    return this.sumRecursionHelper(list, 0);
  }

  sumTheSimpleWay(list) {
    this.x = _.reduce(list, function (memo, num) { return memo + num; });
    return this.x;
  }
}

this.list = [1, 2, 5, 3, 2, 6, 9, 4];
this.sums = new Sums();
console.log(this.sums.sumFor(this.list));
console.log(this.sums.sumWhile(this.list));
console.log(this.sums.sumRecursion(this.list));
console.log(this.sums.sumTheSimpleWay(this.list));
