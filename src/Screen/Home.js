import React from 'react';



const Home = () => {
    return (
        <div>
        
            <div className='bg'>
                <div className='container'>
                    <div>
                        <div>
                            <h1 className='text-color'>Share your smile with <br />the world and <br />find friends</h1>
                            <p className='text-sec'>Thousands of new profiles deliverd <br />weekly to your index</p>
                            <div className="switch">
                                <input type="checkbox" name="toggle" id="toggle" />
                                <label htmlFor="toggle"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;