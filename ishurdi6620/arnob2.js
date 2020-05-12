async function sleep() {
    await new Promise(r => setTimeout(r, 3000));
}
    sleep();
    document.getElementById('counter').innerHTML = 9;
    var answerId;
    switch (question_id) {
        case 127:
            answerId = 507;
            break;
        case 49:
            answerId = 193;
            break;
        case 88:
            answerId = 352;
            break;
        case 28:
            answerId = 112;
            break;
        case 128:
            answerId = 509;
            break;
        case 47:
            answerId = 186;
            break;
        case 65:
            answerId = 257;
            break;
        case 48:
            answerId = 189;
            break;
        case 21:
            answerId = 81;
            break;
        case 110:
            answerId = 437;
            break;
        case 53:
            answerId = 211;
            break;
        case 117:
            answerId = 468;
            break;
        case 76:
            answerId = 303;
            break;
        case 87:
            answerId = 345;
            break;
        case 85:
            answerId = 339;
            break;
        case 93:
            answerId = 369;
            break;
        case 132:
            answerId = 527;
            break;
        case 125:
            answerId = 497;
            break;
        case 103:
            answerId = 410;
            break;
        case 60:
            answerId = 239;
            break;
        case 62:
            answerId = 245;
            break;
        case 6:
            answerId = 22;
            break;
        case 130:
            answerId = 517;
            break;
        case 64:
            answerId = 253;
            break;
        case 114:
            answerId = 453;
            break;
        case 29:
            answerId = 113;
            break;
        case 57:
            answerId = 225;
            break;
        case 129:
            answerId = 515;
            break;
        case 43:
            answerId = 169;
            break;
        case 25:
            answerId = 99;
            break;
        case 40:
            answerId = 157;
            break;
        case 104:
            answerId = 414;
            break;
        case 81:
            answerId = 324;
            break;
        case 10:
            answerId = 38;
            break;
        case 119:
            answerId = 476;
            break;
        case 54:
            answerId = 216;
            break;
        case 19:
            answerId = 74;
            break;
        case 86:
            answerId = 343;
            break;
        case 121:
            answerId = 483;
            break;
        case 14:
            answerId = 56;
            break;
        case 68:
            answerId = 271;
            break;
        case 45:
            answerId = 178;
            break;
        case 83:
            answerId = 330;
            break;
        case 52:
            answerId = 207;
            break;
        case 15:
            answerId = 59;
            break;
        case 92:
            answerId = 365;
            break;
        case 63:
            answerId = 249;
            break;
        case 50:
            answerId = 197;
            break;
        case 31:
            answerId = 123;
            break;
        case 98:
            answerId = 389;
            break;
        default:
            answerId = null;
    }

    checkAnswer(answerId);

