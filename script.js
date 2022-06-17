const adviceNoEl = document.querySelector(".advice-no");
const adviveDescEl = document.querySelector(".advice-desc");
const btn = document.querySelector(".btn");

const renderApiData = function (id, advice) {
  adviceNoEl.textContent = `Advice # ${id}`;
  adviveDescEl.textContent = `${advice}`;
  adviceNoEl.classList.remove("blur");
  adviveDescEl.classList.remove("blur");
};

const renderError = function (status) {
  document.body.textContent = status;
  document.body.classList.add("error");
};

const getAdviceApi = async function () {
  try {
    adviceNoEl.classList.add("blur");
    adviveDescEl.classList.add("blur");

    const apiResponse = await fetch("https://api.adviceslip.com/advice");
    if (!apiResponse.ok) throw new Error(apiResponse.status);

    const {
      slip: { id, advice },
    } = await apiResponse.json();

    renderApiData(id, advice);
  } catch (err) {
    renderError(err);
  }
};

btn.addEventListener("click", getAdviceApi);
getAdviceApi();
