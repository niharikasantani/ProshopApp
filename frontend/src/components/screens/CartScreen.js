import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	Row,
	Col,
	ListGroup,
	Image,
	Form,
	Button,
	Card,
} from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { addToCart } from '../../actions/cartActions';

const CartScreen = ({ match, location, history }) => {
	const productId = match.params.id;

	const quantity = location.search
		? Number(location.search.split('=')[1])
		: 1;

	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);

	const { cartItems } = cart;

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, quantity));
		}
	}, [dispatch, productId, quantity]);

	console.log(quantity);

	return <div>Cart</div>;
};

export default CartScreen;
