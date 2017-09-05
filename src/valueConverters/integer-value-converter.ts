export class IntegerValueConverter {
    toView(value) {
        if (!value)
            return "0";
            return value.toString();
    }
    fromView(value) {
        if (!value)
            return 0;

        return parseInt(value);
    }
}