import React from 'react';

function ProductPage({ list }) {
    return (
        <div>
            <header>
                <a href="#" className="logo"><img src="logo.png" alt="" /></a>

                <ul className="navmenu">
                    <li><a href="#">home</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">products</a></li>
                    <li><a href="#">page</a></li>
                    <li><a href="#">Docs</a></li>
                </ul>

                <div className="nav-icon">
                    <a href="#"><i className='bx bx-search'></i></a>
                    <a href="#"><i className='bx bx-user'></i></a>
                    <a href="display-cart"><i className='bx bx-cart'></i></a>
                    <div className="bx bx-menu" id="menu-icon"></div>
                </div>
            </header>

            <section className="trending-product" id="trending">
                {list.map((item) => (
                    <div key={item.s_id} className="center-text">
                        <h2>SNEAKER <span>STROLL</span></h2>
                        <div className="products">
                            <div className="row">
                                <img src={`resources/images/${item.s_id}.jpg`} alt="" />
                            </div>
                            <div className="price">
                                <h4>{item.name}</h4>
                                <p>Rs. {item.price}</p>
                                <br />
                                <label htmlFor="size-select">Size:</label>
                                <select id="size-select" name="size">
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                                <br /><br />
                                <label htmlFor="quantity-select">Quantity:</label>
                                <select id="quantity-select" name="quantity">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                <br /><br />
                                <div className="buttons">
                                    <div className="action_btn">
                                        <a href={`add-to-cart?s_id=${item.s_id}`}>
                                            <button className="action_btn cancel" type="submit" value="Add To Cart" onClick={myFunction2}>Add To Cart</button>
                                        </a>
                                        <p id="saved"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <section className="contact">
                <div className="contact-info">
                    {/* Contact Info Content */}
                </div>
            </section>

            <div className="end-text">
                <p>Copyright © @2022. All Rights Reserved. Designed By Sneakerstroll.</p>
            </div>
        </div>
    );
}

export default ProductPage;
