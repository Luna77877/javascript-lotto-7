import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync(" ");
    await ValidationInputCheck.isOnlyNumber(input);
  }
}

const NUMBER_REG = /^[0-9]*$/;

class ValidationInputCheck {
  static async isOnlyNumber(input) {
    if (!NUMBER_REG.test(input)) {
      throw new Error("[ERROR] 숫자만 입력해 주세요.");
    }
    try {
      if (!input % 1000 === 0) {
        throw new Error("[ERROR] 1000원 단위로 입력하세요");
      }
      const countLotto = Math.floor(input / 1000);
    } catch (error) {
      MissionUtils.Console.print("1000원단위로 복권 살 수 있습니다.");
    }
  }
}

export default App;
