function QuickSort(a, from, to) {
    var third_index = 0;
    while (true) {
        // Insertion sort is faster for short arrays.
        if (to - from <= 10) {
            InsertionSort(a, from, to);
            return;
        }
    }
}