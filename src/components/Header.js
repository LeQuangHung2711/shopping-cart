import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  {connect} from  'react-redux'
export class Header extends Component {
    render() {
        let ListCart = [];
        let TotalCart=0;
        let Carts = this.props.items.Carts
        Object.keys(Carts).forEach(function(item){
            TotalCart+=Carts[item].quantity * Carts[item].price;
            ListCart.push(Carts[item]);
        });
        return (
            <div className="row">
              <div className="col-md-12">
                  <nav className="navbar  navbar-dark bg-dark ">
                        <ul className="nav">
                            <li className="nav-item" ><Link to="/" className="nav-link active">Products</Link></li>
                            <li className="nav-item"><Link to="/carts" className="nav-link">Carts : {this.props.numberCart} - {Number(TotalCart).toLocaleString('en-US')}$</Link></li>
                        </ul>
                  </nav>
              </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        numberCart:state._todoProduct.numberCart,
        items:state._todoProduct
    }
}
export default connect(mapStateToProps,null)(Header)
