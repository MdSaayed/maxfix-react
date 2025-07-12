import React from 'react';
import { Link } from 'react-router-dom';
import ButtonArrow from '../../../common/ButtonArrow';

const ErrorArea = () => {
    return (
        <div class="error">
            <div class="error__container container">
                <div class="error__image">
                    <img src="./assets/images/global/404.png" alt="404 Error" class="error__image-img"/>
                </div>
                <p class="error__message title-lg">Page Not Found</p>

                <ButtonArrow link='/' text='Back To Home Page' />
            </div>
        </div>
    );
};

export default ErrorArea;