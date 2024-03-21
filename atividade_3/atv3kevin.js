let values = [];

    function addValue() {
        const inputValue = document.getElementById("input-value").value;
        if (inputValue !== "") {
            values.push(parseInt(inputValue));
            displayValues();
        } else {
            alert("Por favor, insira um valor inteiro.");
        }
    }

    function displayValues() {
        const valuesList = document.getElementById("values-list");
        valuesList.innerHTML = "";
        values.forEach(value => {
            const li = document.createElement("li");
            li.textContent = value;
            valuesList.appendChild(li);
        });
    }

    function sumValues() {
        const sum = values.reduce((acc, currentValue) => acc + currentValue, 0);
        document.getElementById("sum-result").textContent = `A soma dos valores é: ${sum}`;
    }

    function clearValues() {
        values = [];
        document.getElementById("values-list").innerHTML = "";
        document.getElementById("sum-result").textContent = "";
    }