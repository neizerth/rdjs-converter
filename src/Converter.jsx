import { useState } from "react";

export const Converter = ({ rate }) => {
    const [usd, setUSD] = useState(1);
    const [rub, setRUB] = useState(rate);

    const handleRUBChange = e => {
        const { value } = e.target;
        setRUB(value);
        setUSD(value * 1/rate);
    }
    const handleUSDChange = e => {
        const { value } = e.target;
        setUSD(value);
        setRUB(value * rate);
    }
    return (
        <div className="converter">
            <h3 className="converter__title">Курс доллара {rate}</h3>
            <div className="converter__group">
                <label className="converter__label">
                    RUB:
                    <input type="text" className="converter__field" value={rub} onInput={handleRUBChange} />
                </label>
                <label className="converter__label">
                    USD:
                    <input type="text" className="converter__field" value={usd} onInput={handleUSDChange} />
                </label>
            </div>
        </div>
    )
}