< !DOCTYPE html >
    <html lang="pl">
        <head>
            <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
                        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
                        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
                        <link rel="stylesheet" href="REA.css" />
                        <title>TESTY MOJE</title>
                    </head>
                    <body>

                        <div id='nowy'></div>
                        <script type="text/babel">



      const Nazwy = props => {
       const [State , setState] = React.useState('') ;
                            const [value , setValue] = React.useState('') ;
           
               
               const handleClick = () => {
                                setState(State + 'VERY GOOD');
               }
                const handleChange =(e) => {
                                setValue(e.target.value)
                            }


                            return  <div className='REA'>
                                <h1>HOOKI</h1>
                                {State}<br />
                                <p>{value}</p>
                                <button onClick={handleClick}>Dodaj</button>
                                <input value={value} type="text" placeholder="napisz coś" onChange={handleChange}></input>
                            </div>
      
    }



                            ReactDOM.render(<Nazwy />, document.querySelector('#nowy'))

                        </script>

                    </body>
                </html>