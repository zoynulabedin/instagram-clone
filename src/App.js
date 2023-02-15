
import { Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore/Explore";

import Home from "./pages/Home/Home";
import Message from "./pages/Messages/Message";
import Notification from "./pages/Notifications/Notification";
import Profile from "./pages/Profile/Profile";
import Reels from "./pages/Reels/Reels";
import Search from "./pages/Search/Search";

function App() {
	return (
		<>
		
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<Search />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="/reels" element={<Reels />} />
				<Route path="/message" element={<Message />} />
				<Route path="/notification" element={<Notification />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</>
	);
}

export default App;
