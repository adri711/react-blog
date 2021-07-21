import logo from './logo.svg';
import './App.css';

function App() {
  const blogArr = [
    {
      'title': 'Lorem',
      'paragraph': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus lectus, tempus sed odio vel, tempor sodales tellus. Nullam blandit neque quis mi molestie tristique ut eget urna. Pellentesque venenatis tellus mauris, ut tristique turpis pretium id. In aliquet orci id velit blandit, quis vestibulum ante rhoncus. Nulla euismod laoreet risus, non molestie enim. Donec imperdiet facilisis nibh, id sodales augue faucibus quis. Vivamus interdum vel lacus nec laoreet.'
    }, 
    {
      'title': 'Title 2',
      'paragraph': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus lectus, tempus sed odio vel, tempor sodales tellus. Nullam blandit neque quis mi molestie tristique ut eget urna. Pellentesque venenatis tellus mauris, ut tristique turpis pretium id. In aliquet orci id velit blandit, quis vestibulum ante rhoncus. Nulla euismod laoreet risus, non molestie enim. Donec imperdiet facilisis nibh, id sodales augue faucibus quis. Vivamus interdum vel lacus nec laoreet.'
    }
  ];

  
  const blogCards = blogArr.map((item) => {
    return (
      <div class="blogCard">
        <h3>{item.title}</h3>
        <p>{item.paragraph}</p>
      </div>
    );
  });

  return (
    <div className="App">
      {blogCards}
    </div>
  );
}

export default App;