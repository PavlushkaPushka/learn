function bSearchForSortNumbMsv(elem) {

    let first = 0;
    let last = this.length - 1;
    let mid, result;

    while (last >= first) {
        mid = parseInt((first + last) / 2);
        result = this[mid];
        if (result > elem) {
            last = mid - 1;
        } else if (result < elem) {
            first = mid + 1;
        } else if (result == elem) {
            return true;
        }
    }

    return false;

}