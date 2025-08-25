import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "../ui/sidebar";
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";

const AppSidebar = () => {
  return (
    <>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup>
            <Link to="/">
              <Button variant="ghost" className="w-full justify-start">
                🏠 Company Blog
              </Button>
            </Link>
          </SidebarGroup>
          <SidebarGroup>
            <Link to="/editor">
              <Button variant="ghost" className="w-full justify-start">
                ✍️ New Post
              </Button>
            </Link>
            <Link to={"/editor/posts" as never}>
              <Button variant="ghost" className="w-full justify-start">
                📄 Manage Posts
              </Button>
            </Link>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </>
  );
};

export default AppSidebar;
