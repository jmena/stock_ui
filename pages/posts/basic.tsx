import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

export default function Basic() {
    const [model, setModel] = useState({
        accuracy: 1.0,
    });



    if (typeof window !== "undefined") {
        window["model"] = (value) => {
            setModel({accuracy:value});
        }
    }
    // console.info("Current value: " + accuracy)
    // header
    // content
    // footer

    return (
        <>
            <div className="container">
                <header>
                    <div className="text-center">
                        <h1>Tile</h1>
                        <p>Some quick example text to build on the card title and make up the bulk of the cards
                            content.</p>
                    </div>
                </header>

                <main>
                    <div className="row text-center">
                        <div className="col">
                            <h1 className="value-multiplier">
                                {model.accuracy*100}
                                <small className="text-muted fw-light">%</small>
                            </h1>
                            <h5 className="value-heading">Accuracy</h5>
                            <p className="value-description">Some quick example text to build on the card title and make
                                up the bulk of
                                the cards content.</p>
                        </div>
                    </div>

                    <div className="row text-center">
                        <div className="col">
                            <div className="card text-white bg-dark ">
                                <div className="card-header"><h1>   {model.accuracy}<small className="fw-light">%</small></h1>
                                    <div className="card-body">
                                        <h5 className="card-title">Dark card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and
                                            make up the bulk
                                            of the cards content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row text-center">
                        <div className="col">
                            <div className="card border-light">
                                <div className="card-header"><h1>   {model.accuracy}<small className="fw-light">%</small></h1>
                                    <div className="card-body">
                                        <h5 className="card-title">Title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and
                                            make up the bulk
                                            of the cards content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </>
    );
}




