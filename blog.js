let blogs = [];

function addCard(event) {
  event.preventDefault();

  let title = document.getElementById('input-card-title').value;
  let content = document.getElementById('input-card-content').value;
  let image = document.getElementById('input-card-image');
  let startDate = document.getElementById('today').value;
  let endDate = document.getElementById('enddate').value;

  startDate = new Date(startDate);
  endDate = new Date(endDate);

  console.log(image);
  if (title == '' || image == '' || content == '') {
    return alert('All input fields must be not empty');
  }
  image = URL.createObjectURL(image.files[0]);

  document.getElementById('input-card-title').value = '';

  let blog = {
    title: title,
    image: image,
    content: content,
    startDate: startDate,
    endDate: endDate,
  };

  blogs.push(blog);

  renderBlog();

}

function renderBlog() {
  console.table(blogs);

  let blogContainer = document.getElementById('contents');

  blogContainer.innerHTML = "";

  for (let i = 0; i < blogs.length; i++) {
    console.log(blogs[i]);

    blogContainer.innerHTML += `
    <div id="${i}" class="project-list">
              <div class="card1">
                <div class="image">
                  <img src="${blogs[i].image}" alt="my image" />
                </div>
                <div class="header">
                  <h3><a href="detail-card1.html" target="_blank" style="color: black;">${blogs[i].title}</a></h3>
                  <p style="color: rgba(0, 0, 0, 0.6)">durasi : ${getDistanceTime(blogs[i].startDate, blogs[i].endDate)} hari</p>
                </div>
                <div class="content">
                  <p>
                  ${blogs[i].content}
                  </p>
                </div>
                
                <div style="margin-top: 10px" >
                    <a href="play.google.com"><img src="play-store.png" style="position: relative; cursor:progress; width: 25px; " alt="play-store" target="_blank"/></a>
                    <a href="android.com"><img src="android.png" alt="android" style="position:relative; cursor:progress; width: 25px; margin-left: 10px;" target="_blank"/></a>
                    <a href="java.com"><img src="java.png" style="position: relative; cursor: progress; width: 25px; margin-left: 10px;" alt="twitter"/></a>
                </div>
      
                <span>
                    <button style="padding: 5px 45px;
                    font-size: 17px;
                    background: #041562;
                    border-radius: 9px;
                    border: none;
                    color: rgb(255, 255, 255);
                    cursor: progress;
                    margin-top: 15px;">edit</button>
      
                    <button style="padding: 5px 45px;
                    font-size: 17px;
                    background: #041562;
                    border-radius: 9px;
                    border: none;
                    color: rgb(255, 255, 255);
                    cursor: progress;">delete</button>
                </span>
          
      
              </div>
            </div>
    `;
  }
}

function getDistanceTime(startDate, endDate){
  var endDate = new Date(endDate);
  var startDate = new Date(startDate);

  var delta = endDate - startDate;
  var resultDate = new Date(delta);
  return resultDate.getDate("  hari");
}