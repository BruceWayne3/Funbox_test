import React from 'react';
import Comment from './Comment';

function changeSlogan(event) {
    let slogan = event.currentTarget.firstChild.firstChild;
    slogan.classList.add("question");
    slogan.textContent = 'Котэ не одобряет?';
};

function toggleSlogan(event) {
    let slogan = event.currentTarget.firstChild.firstChild;
    slogan.classList.remove("question");
    slogan.textContent = 'Сказочное заморское яство';
    event.currentTarget.addEventListener('mousemove', changeSlogan);
};

const data = {
    duck: {
        state: 'default',
        taste: 'с фуа-гра',
        portion: '10',
        giftCount: '',
        giftText: 'мышь в подарок',
        value: '0,5',
        comment: 'Печень утки разварная с артишоками.'
    }, 
    fish: {
        state: 'default',
        taste: 'с рыбой',
        portion: '40',
        giftCount: '2',
        giftText: ' мыши в подарок',
        value: '2',
        comment: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
    }, 
    chicken: {
        state: 'disabled',
        taste: 'с курой',
        portion: '100',
        giftCount: '5',
        giftText: ' мышей в подарок',
        clientComment: 'заказчик доволен',
        value: '5',
        comment: 'Печалька, с курой закончился.'
    }
};

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: data[this.props.taste].state,
            taste: data[this.props.taste]
        }
        
        this.toggleBuy = this.toggleBuy.bind(this);
        this.changeComment = this.changeComment.bind(this);
    }

    toggleBuy(event) {
        if(this.state.card === 'default') {
            this.setState({card: 'active'});
            event.currentTarget.addEventListener('mouseleave', toggleSlogan);
        } else if(this.state.card === 'active') {
            this.setState({card: 'default'});
            event.currentTarget.removeEventListener('mousemove', changeSlogan);
            event.currentTarget.removeEventListener('mouseleave', toggleSlogan);
            let slogan = event.currentTarget.firstChild.firstChild;
            slogan.classList.remove("question");
            slogan.textContent = 'Сказочное заморское яство';
        };
    }

    changeComment(event) {
        this.setState({card: 'active'});
        let cardAbout = event.currentTarget.parentNode.parentNode.previousElementSibling;
        cardAbout.addEventListener('mousemove', changeSlogan);
        cardAbout.addEventListener('mouseleave', toggleSlogan);
    }

    render () {
        const cardData = this.state.taste;

        return (
            <div className="content__column">
                <div className={`card-about__img_${this.state.card}`} onClick={this.toggleBuy}>
                    <div className="card-about__information">
                        <p className="card-about__slogan">Сказочное заморское яство</p>
                        <h2 className="card-about__title">Нямушка</h2>
                        <h2 className="card-about__taste">{cardData.taste}</h2>
                        <div className="card-about__text">
                            <p className="card-about__portion"><b>{cardData.portion}</b> порций </p><br/>
                            <p className="card-about__gift"><b>{cardData.giftCount}</b>{cardData.giftText}</p><br/>
                            <p>{cardData.clientComment}</p>
                        </div>
                    </div>
                    <div className={`card-about__weight_${this.state.card}`}>
                        <p className="card-about__value">{cardData.value}</p>
                        <p className="card-about__measure">кг</p>
                    </div>
                </div>
                <div className="card-comment">
                        <Comment buyBtn={this.changeComment} state={this.state.card} comment={cardData.comment}/>
                </div>
            </div>
        )
    }
}

export default Card;