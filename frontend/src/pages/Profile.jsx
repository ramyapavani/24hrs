const Profile = () => (
  <div>
    <h1>User Profile</h1>
    <p>Email: {user.email}</p>
    <Link to="/orders">Order History</Link>
    <Link to="/wishlist">Wishlist</Link>
  </div>
);
