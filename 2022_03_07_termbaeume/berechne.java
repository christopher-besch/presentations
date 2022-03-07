public static int berechne(BinTree<String> root) {
    switch (root.getItem()) {
        case "+":
            return
                berechne(root.getLeft()) +
                berechne(root.getRight());
        case "*":
            return
                berechne(root.getLeft()) *
                berechne(root.getRight());
        default:
            return wert(root.getItem());
    }
}
