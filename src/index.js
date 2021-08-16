module.exports = function toReadable(number) {
    let str = number.toString();
    let first = "";
    let second = "";
    let third = "";

    switch (true) {
        case number >= 100:
            first = str[0];
            second = str[1];
            third = str[2];

            break;

        case number >= 10:
            second = str[0];
            third = str[1];

            break;

        case number < 10:
            third = str[0];

            break;

        default:
            break;
    }

    if (number >= 10 && number <= 19) {
        switch (true) {
            case number === 10:
                second = "ten";

                break;
            case number === 11:
                second = "eleven";

                break;

            case number === 12:
                second = "twelve";

                break;

            case number === 13:
                second = "thirteen";

                break;

            case number === 14:
                second = "fourteen";

                break;

            case number === 15:
                second = "fifteen";

                break;

            case number === 16:
                second = "sixteen";
                break;

            case number === 17:
                second = "seventeen";

                break;

            case number === 18:
                second = "eighteen";

                break;

            case number === 19:
                second = "nineteen";

                break;

            default:
                break;
        }
        return second;
    }

    switch (first) {
        case "1":
            first = "one hundred";

            break;

        case "2":
            first = "two hundred";

            break;

        case "3":
            first = "three hundred";

            break;

        case "4":
            first = "four hundred";

            break;

        case "5":
            first = "five hundred";

            break;

        case "6":
            first = "six hundred";
            break;

        case "7":
            first = "seven hundred";

            break;

        case "8":
            first = "eight hundred";

            break;

        case "9":
            first = "nine hundred";

            break;

        default:
            break;
    }

    if (second === "1") {
        switch (third) {
            case "0":
                second = "ten";

                break;
            case "1":
                second = "eleven";

                break;

            case "2":
                second = "twelve";

                break;

            case "3":
                second = "thirteen";

                break;

            case "4":
                second = "fourteen";

                break;

            case "5":
                second = "fifteen";

                break;

            case "6":
                second = "sixteen";
                break;

            case "7":
                second = "seventeen";

                break;

            case "8":
                second = "eighteen";

                break;

            case "9":
                second = "nineteen";

                break;

            default:
                break;
        }
        return `${first} ${second}`;
    }

    switch (second) {
        case "0":
            second = "";

            break;
        case "2":
            second = "twenty";

            break;

        case "3":
            second = "thirty";

            break;

        case "4":
            second = "forty";

            break;

        case "5":
            second = "fifty";

            break;

        case "6":
            second = "sixty";
            break;

        case "7":
            second = "seventy";

            break;

        case "8":
            second = "eighty";

            break;

        case "9":
            second = "ninety";

            break;

        default:
            break;
    }

    switch (third) {
        case "0":
            if (second === "" && first === "") {
                third = "zero";
            } else {
                third = "";
            }
            break;
        case "1":
            third = "one";

            break;

        case "2":
            third = "two";

            break;

        case "3":
            third = "three";

            break;

        case "4":
            third = "four";

            break;

        case "5":
            third = "five";

            break;

        case "6":
            third = "six";
            break;

        case "7":
            third = "seven";

            break;

        case "8":
            third = "eight";

            break;

        case "9":
            third = "nine";

            break;

        default:
            break;
    }
    return `${first} ${second} ${third}`.trim().replace(/ {1,}/g, " ");
};
