import React from 'react';
import ZodiacInfo from '../../Components/ZodiacInfo/ZodiacInfo';
import { ZodiacCalculation } from '../../Utils/Utils';
import { useLocation } from 'wouter';
import { Button } from 'react-bootstrap';
import './LuckResult.css'
import CardsThrow from '../../Components/CardsThrow/CardsThrow';

function LuckResult({ params }) {
    const { name, age, gender, birthDate } = params;
    const [path, pushLocation] = useLocation();

    const zodiac = ZodiacCalculation(birthDate);

    function goBack() {
        pushLocation('/homepage')
    }

    return (
        <div className='luck-result'>
            <ZodiacInfo zodiac={zodiac} name={name} />
            <CardsThrow zodiac={zodiac} />
            <Button type="button" className="btn btn-outline-light delete-background" onClick={goBack}>
                Realizar otra consulta
            </Button>
        </div>
    );
}

export default LuckResult;