import './Card.css';
import Head from './Head.js';
import Card from './Card.js';

function App() {
    let datum = [
        {
            isPopular : false,
            plan: 'BASIC',
            TeamMembers: '3-5 ',
            price: '28',
            
            discount: '$20',
            Description: [
                {
                    text: `Perfect of Small Team`,
                    enable: true
                },
                {
                    text: `Unlimited Invoices`,
                    enable: true
                },
                {
                    text: `Project Management`,
                    enable: true
                },
                {
                    text: `Team Management`,
                    enable: false
                }, {
                    text: `Time Tracking`,
                    enable: false
                }
            ]
        }, {
            isPopular : true,
            plan: 'INTERMEDIATE',
            TeamMembers: '5-10 ',
            price: '39',
            
            discount: '$30',
            Description: [
                {
                    text: `Perfect of Small Team`,
                    enable: true
                },
                {
                    text: `Unlimited Invoices`,
                    enable: true
                },
                {
                    text: `Project Management`,
                    enable: true
                },
                {
                    text: `Team Management`,
                    enable: true
                }, {
                    text: `Time Tracking`,
                    enable: false
                }
            ]
        }, {
            isPopular : false,
            plan: 'HIGH CLASS',
            TeamMembers: '10-25',
            price: '58',
            
            discount: '$50',
            Description: [
                {
                    text: `Perfect of Small Team`,
                    enable: true
                },
                {
                    text: `Unlimited Invoices`,
                    enable: true
                },
                {
                    text: `Project Management`,
                    enable: true
                },
                {
                    text: `Team Management`,
                    enable: true
                }, {
                    text: `Time Tracking`,
                    enable: true
                }
            ]
        }, {
            isPopular : false,
            plan: 'SUPREME',
            TeamMembers: '25-100',
            price: '99',
            discount: '$80',
            Description: [
                {
                    text: `Perfect of Small Team`,
                    enable: true
                },
                {
                    text: `Unlimited Invoices`,
                    enable: true
                },
                {
                    text: `Project Management`,
                    enable: true
                },
                {
                    text: `Team Management`,
                    enable: true
                }, {
                    text: `Time Tracking`,
                    enable: true
                }
            ]
        }
    ];
    
    return (
        <div className="pricing1 py-5 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <Head></Head>
                    <div className="row mt-5">
                      {datum.map( ele => <Card info = {ele}></Card> )}
                      
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
