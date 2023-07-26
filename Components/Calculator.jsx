import React from 'react'

const Calculator = () => {
  return (
    <div>
     <main class="container">
        <div class="result">
        <p id="input"></p>
        </div>
        <div class="buttons">
            <div class="section">
                <button class="clear">AC</button>
                <button class="delete">DEL</button>
                <button class="perc">%</button>
                <button class="button">/</button>
            </div>
            <div class="section">
                <button class="button">7</button>
                <button class="button">8</button>
                <button class="button">9</button>
                <button class="button">*</button>
            </div>
            <div class="section">
                <button class="button">4</button>
                <button class="button">5</button>
                <button class="button">6</button>
                <button class="button">-</button>
            </div>
            <div class="section">
                <button class="button">1</button>
                <button class="button">2</button>
                <button class="button">3</button>
                <button class="button">+</button>
            </div>
            <div class="section-1">
                <button class="button">0</button>
                <button class="button">.</button>
                <button class="equal">=</button>
            </div>
        </div>
    </main> 
    <script src="./Components/CalculatorCode.js"></script>  
    </div>
    
  )
}

export default Calculator