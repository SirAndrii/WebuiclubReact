import React from "react";
import '../catalog/catalog.css'

export default function Catalog() {
    return (
        <> <div className='main'>
            <div className='upperContainer'>
                <div className='options'>
                    <div>
                        Filter 1
                    </div>
                    <div>
                        Filter 2
                    </div>
                    <div>
                        Filter 3
                    </div>
                </div>
                <button className='buttonApply'>Apply</button>
            </div>
            <div className='lowerContainer'>
                <div className='items'>
                    <div className='ItemsCount'><p>Item 1</p></div>
                    <div className='photo'><img src="https://image.shutterstock.com/image-vector/img-file-document-icon-260nw-1356823577.jpg" alt='' width='100px' />     </div>           <div></div>
                    <div className='mainText'>
                        <h6>Amaizing stuff</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam.
                        </p></div>
                    <div className='price'><p>Price</p><p>2225$</p></div>
                    <div className='ViewMore'><button>View more</button></div>
                </div>
                <div className='items'>
                <div className='ItemsCount'><p>Item 1</p></div>
                    <div className='photo'><img src="https://image.shutterstock.com/image-vector/img-file-document-icon-260nw-1356823577.jpg" alt='' width='100px' />     </div>           <div></div>
                    <div className='mainText'>
                        <h6>Amaizing stuff</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam.
                        </p></div>
                    <div className='price'><p>Price</p><p>2225$</p></div>
                    <div className='ViewMore'><button>View more</button></div>
                </div>
                <div className='items'>
                <div className='ItemsCount'><p>Item 1</p></div>
                    <div className='photo'><img src="https://image.shutterstock.com/image-vector/img-file-document-icon-260nw-1356823577.jpg" alt='' width='100px' />     </div>           <div></div>
                    <div className='mainText'>
                        <h6>Amaizing stuff</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam.
                        </p></div>
                    <div className='price'><p>Price</p><p>2225$</p></div>
                    <div className='ViewMore'><button>View more</button></div>
                </div>
                <div className='items'>
                <div className='ItemsCount'><p>Item 1</p></div>
                    <div className='photo'><img src="https://image.shutterstock.com/image-vector/img-file-document-icon-260nw-1356823577.jpg" alt='' width='100px' />     </div>           <div></div>
                    <div className='mainText'>
                        <h6>Amaizing stuff</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam.
                        </p></div>
                    <div className='price'><p>Price</p><p>2225$</p></div>
                    <div className='ViewMore'><button>View more</button></div>
                </div>
            </div>
        </div>
        </>
    );
}