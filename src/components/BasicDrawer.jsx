import * as React from "react";
import { Drawer, Button } from "@tail-kit/tail-kit";

export default function BasicDrawer() {
  const [visible, setVisible] = React.useState(false);
  function showDrawer() {
    setVisible(true);
  }
  function hideDrawer() {
    setVisible(false);
  }
  return (
    <>
      <div class="flex">
        <div class="flex-none w-14 h-14"></div>
        <div class="flex-initial w-64 ..."></div>
        <div class="flex-initial w-32 ...">
          <Button className="flex-1" buttonType="primary" onClick={showDrawer}>
            Open
          </Button>
        </div>
      </div>
      <Drawer
        visible={visible}
        title="Basic Drawer"
        onRequestClose={hideDrawer}
        placement="left"
      >
        <p>Some Contents...</p>
        <p>Some Contents...</p>
        <p>Some Contents...</p>
      </Drawer>
    </>
  );
}
