import React from 'react';

function Card(props) {
    return (
        <div className='card'>
            <div className='img'>
                <img src='https://media.istockphoto.com/id/1321848051/photo/portrait-of-young-brunette-girl-in-denim-shirt.jpg?b=1&s=170667a&w=0&k=20&c=ZL_RN1ScJo25kwunq2NHG2c3i9p6w4l7Axvi529jOys=' alt=''/>
            </div>
            <div className='des'>
                <h2>Alexendra Caulea</h2>
                <p>I enjoy drinking a cup of coffee every day</p>
            </div>
            <div className='follwer'>
              <div>
              <span className='a'>172</span>
             <br/>
              <span>POSTS</span>
              </div>
              <div>
              <span className='a'>42</span>
              <br/>
              <span>FOLLOWERS</span>
              </div>
              <div>
              <span className='a'>20</span>
              <br/>
              <span>FOLLOWING</span>
              </div>
            </div>
            <div className='btn'>
                <button className='btn1'>FOLLOW</button>
                <button className='btn2'>MESSAGE</button>
            </div>
        </div>
    );
}

export default Card;