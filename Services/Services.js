_makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=100`;
    this.setState({ loading: true });
  
    setTimeout( () => {
      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            data: page === 1 ? res.results : [...this.state.data, ...res.results],
            error: res.error || null,
            loading: false,
          });
        })
        .catch(error => {
          this.setState({ error, loading: false});
        });
    }, 1500);
   }
  
   _clearLoader(time){
    setTimeout(()=> this.setState({
         animating: false,
    }), time);
  }
  