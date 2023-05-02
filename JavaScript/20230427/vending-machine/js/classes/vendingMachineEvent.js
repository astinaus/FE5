class VendingMachineEvent {
  constructor() {
    const vMachine = document.querySelector(".section1");
    this.balance = vMachine.querySelector(".bg-box p");
    this.itemList = vMachine.querySelector(".cola-list");
    this.inputCostEl = vMachine.querySelector("#input-money");
    this.btnPut = vMachine.querySelector("#input-money+.btn");
    this.btnReturn = vMachine.querySelector(".bg-box+.btn");
    this.btnGet = vMachine.querySelector(".btn-get");
    this.stagedList = vMachine.querySelector(".get-list");

    const myInfo = document.querySelector(".section2");
    this.myMoney = myInfo.querySelector(".bg-box strong");

    const getInfo = document.querySelector(".section3");
    this.getList = getInfo.querySelector(".get-list");
    this.txtTotal = getInfo.querySelector(".total-price");
  }

  stagedItemGenerator(target) {
    const stagedItem = document.createElement("li");
    stagedItem.dataset.item = target.dataset.item;
    stagedItem.dataset.price = target.dataset.price;
    stagedItem.innerHTML = `
    <img src="./img/${target.dataset.img}" alt="">${target.dataset.item}
    <strong>1
    <span class="a11y-hidden">개</span>
    </strong>
    
    `;
    this.stagedList.append(stagedItem);
  }

  bindEvent() {
    /**
     * 1. 입금 버튼 기능
     * 입금 버튼을 누르면
     * 1) 소지금 === 소지금 - 입금액
     * 2) 잔액 === 기존 잔액 + 입금액
     * 3) 입금액이 소지금보다 많으면 경고창 띄우기
     * 4) 입금액이 정상적으로 입금되면 입금창 초기화
     */
    this.btnPut.addEventListener("click", () => {
      // 입력값
      const inputCost = parseInt(this.inputCostEl.value);
      // 소지금
      const myMoneyVal = parseInt(this.myMoney.textContent.replace(/,/g, ""));
      // 잔액
      const balanceVal = parseInt(this.balance.textContent.replace(/,/g, ""));

      if (inputCost) {
        // 입금액이 소지금보다 적거나 같다면
        if (inputCost <= myMoneyVal && inputCost > 0) {
          // 소지금 === 소지금 - 입금액
          this.myMoney.textContent =
            new Intl.NumberFormat().format(myMoneyVal - inputCost) + "원";
          // 잔액 === 기존 잔액 + 입금액
          this.balance.textContent =
            new Intl.NumberFormat().format(
              (balanceVal ? balanceVal : 0) + inputCost
            ) + "원";
        } else {
          // 입금액이 소지금보다 많다!
          alert("소지금이 부족합니다.");
        }
        // 입금창 초기화
        this.inputCostEl.value = "";
      }
    });

    /**
     * 2. 반환 버튼 기능
     * 1) 반환버튼을 누르면 소지금 === 잔액 + 소지금
     * 2) 반환버튼을 누르면 잔액창이 초기화됩니다.
     */
    this.btnReturn.addEventListener("click", () => {
      // 잔액
      const balanceVal = parseInt(this.balance.textContent.replace(/,/g, ""));
      // 소지금
      const myMoneyVal = parseInt(this.myMoney.textContent.replace(/,/g, ""));

      if (balanceVal) {
        // 소지금 === 잔액 + 소지금
        this.myMoney.textContent =
          new Intl.NumberFormat().format(myMoneyVal + balanceVal) + "원";
        // 잔액창 초기화
        this.balance.textContent = "";
      }
    });

    /**
     * 3. 자판기 장바구니 채우기
     * 1) 아이템을 누르면 잔액 === 잔액 - 아이템 가격
     * 2) 아이템 가격이 잔액보다 크다면 경고메세지를 줍니다.
     * 3) 아이템이 장바구니에 들어갑니다.
     * 4) 아이템의 count가 -1이 됩니다. 아이템의 카운트가 0이 되면 품절 표시를 합니다.
     *
     */
    this.btnsCola = document.querySelectorAll(".section1 .btn-cola");
    this.btnsCola.forEach((item) => {
      item.addEventListener("click", (event) => {
        const balanceVal = parseInt(this.balance.textContent.replace(/,/g, ""));
        const targetEl = event.currentTarget;
        const targetElPrice = parseInt(targetEl.dataset.price);
        const stagedListItem = this.stagedList.querySelectorAll("li");
        let isStaged = false;

        if (balanceVal >= targetElPrice) {
          this.balance.textContent =
            new Intl.NumberFormat().format(balanceVal - targetElPrice) + "원";

          // 장바구니 콜라 생성
          for (const item of stagedListItem) {
            // 클릭한 콜라의 이름과 장바구니에 있던 콜라의 이름이 같은지 비교
            if (targetEl.dataset.item === item.dataset.item) {
              // 이미 장바구니에 콜라가 있다면 카운트만 +1
              item.querySelector("strong").firstChild.textContent =
                parseInt(item.querySelector("strong").firstChild.textContent) +
                1;
              isStaged = true;
              break;
            }
          }
          // 처음 선택했을 경우에만 장바구니에 콜라를 생성합니다.
          if (!isStaged) {
            // 장바구니 콜라 생성
            this.stagedItemGenerator(event.currentTarget);
          }
          // 자판기 콜라 개수 차감
          targetEl.dataset.count--;
          // 자판기 콜라 개수가 0이면 품절 표시
          if (!parseInt(targetEl.dataset.count)) {
            targetEl.insertAdjacentHTML(
              "beforeend",
              `<strong class="sold-out"><span>품절</span></strong>`
            );
            targetEl.disabled = true;
          }
        } else {
          alert("잔액이 부족합니다.");
        }
      });
    });
    /**
     * 4. 획득 버튼 기능
     * 1) 장바구니에 있는 음료수 목록이 획득한 음료 목록으로 이동합니다.
     * 2) 획득한 음료의 모든 금액을 합하여 총 금액을 업데이트합니다.
     */
    this.btnGet.addEventListener("click", () => {
      const itemStagedList = this.stagedList.querySelectorAll("li");
      const itemGetList = this.getList.querySelectorAll("li");

      for (const itemStaged of itemStagedList) {
        let isGet = false; // 이미 획득했는가?
        for (const itemGet of itemGetList) {
          if (itemStaged.dataset.item === itemGet.dataset.item) {
            itemGet.querySelector("strong").firstChild.textContent =
              parseInt(itemGet.querySelector("strong").firstChild.textContent) +
              parseInt(
                itemStaged.querySelector("strong").firstChild.textContent
              );

            isGet = true;
            break;
          }
        }

        if (!isGet) {
          this.getList.append(itemStaged);
        }
      }
      // 장바구니 목록 초기화
      this.stagedList.innerHTML = "";

      let totalPrice = 0;

      // 획득한 음료 리스트를 순회하면서 총 금액을 계산합니다.
      this.getList.querySelectorAll("li").forEach((itemGet) => {
        totalPrice +=
          parseInt(itemGet.dataset.price) *
          parseInt(itemGet.querySelector("strong").firstChild.textContent);
      });
      this.txtTotal.textContent = `총 금액 : ${new Intl.NumberFormat().format(
        totalPrice
      )} 원`;
    });
  }
}

export default VendingMachineEvent;
