import Studentcard from '../components/studentcard';

function Home() {
  return (
    <div>
      <h1 className="my-4">Student Directory</h1>
      
      <div className="row g-4 my-3">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Studentcard 
            name="Arham Khan"
            studentId="2480256"
            major="Computer Science"
            year="2"
            gpa="3.8"
            imageUrl="https://www.partysuppliesindia.com/cdn/shop/products/A2_33_c020ee18-0c82-4dc1-b16d-c90a64707b20.jpg"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Studentcard 
            name="Eshika Nanikshahi"
            studentId="2480241"
            major="Computer Science"
            year="2"
            gpa="3.8"
            imageUrl="https://www.partysuppliesindia.com/cdn/shop/products/a1_40_5ccf2e61-57f8-45c9-b8d7-2743eb669b81.jpg"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Studentcard 
            name="Saifullah Khan"
            studentId="2480267"
            major="Computer Science"
            year="2"
            gpa="2.4"
            imageUrl="https://rukminim2.flixcart.com/image/480/480/xif0q/sticker/7/9/1/chhota-bheem-theme-cut-outs-jaggu-medium-1-na-42-211200003389-original-imagzczsqauhfarb.jpeg"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Studentcard 
            name="Zeeshan"
            studentId="2480275"
            major="Computer Science"
            year="2"
            gpa="2.4"
            imageUrl="https://funskoolindia.com/wp-content/uploads/2024/09/Dholu-2.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;