const SingIn = ()=> {
    return ( 
      <div className = "singIn">
         <Form horizontal >
      <FormGroup controlId="formHorizontalEmail">
        <Col className = "logo" componentClass={ControlLabel} sm={2}>
          
        </Col>
        <Col sm={10}>
          <FormControl className = "input" type="email" placeholder="quinsal@trello.com" />
        </Col>
      </FormGroup>
  
      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} sm={2}>          
        </Col>
        <Col sm={10}>
          <FormControl className = "input" type="password" placeholder="......." />
        </Col>
      </FormGroup>
    
      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button className= "button" type="submit">
            Sign in
          </Button>         
        </Col>
       <FormGroup>

      <FormGroup>
      <a className = "a" href="/sign_up" data-reactid=".0.0.0.2">Create new account</a>
      </FormGroup>
      </Form>
         
             
      </div>
       
  );
}

