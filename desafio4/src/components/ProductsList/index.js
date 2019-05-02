import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import Numeral from 'numeral';
import 'numeral/locales/pt-br';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsActions from '~/store/ducks/products';

import {
  Container,
  Loading,
  List,
  Product,
  ProductImage,
  ImageSource,
  ProductName,
  ProductBrand,
  ProductPrice,
} from './styles';

Numeral.locale('pt-br');

class ProductsList extends Component {
  static propTypes = {
    loadProductsRequest: PropTypes.func.isRequired,
    categoryId: PropTypes.number,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }),
    ),
    loading: PropTypes.bool.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  static defaultProps = {
    categoryId: null,
    products: null,
  };

  componentDidMount() {
    const { categoryId, loadProductsRequest } = this.props;

    loadProductsRequest(categoryId);
  }

  handleProductPress = (productId) => {
    const { navigation } = this.props;

    navigation.navigate('Details', { productId });
  };

  render() {
    const { products, loading } = this.props;

    return (
      <Container>
        {loading && <Loading size="small" color="#333" />}

        {!loading && products && (
          <List
            numColumns={2}
            data={products}
            keyExtractor={product => String(product.id)}
            renderItem={({ item: product }) => (
              <Product onPress={() => this.handleProductPress(product.id)}>
                <ProductImage>
                  <ImageSource source={{ uri: product.image }} />
                </ProductImage>
                <ProductName>{product.name}</ProductName>
                <ProductBrand>{product.brand}</ProductBrand>
                <ProductPrice>{Numeral(product.price).format('$ 0,0.00')}</ProductPrice>
              </Product>
            )}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.products.loading,
  products: state.products.data.products,
  categoryId: state.categories.current,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ProductsList),
);
