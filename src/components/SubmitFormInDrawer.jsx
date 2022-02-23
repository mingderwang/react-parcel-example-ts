import * as React from "react";
import { Drawer, Button, Form, Input, Select } from "@tail-kit/tail-kit";
import { HiOutlinePlus } from "react-icons/hi";

export default function SubmitFormInDrawer() {
  const [visible, setVisible] = React.useState(false);
  const formRef = React.useRef(null);
  function showDrawer() {
    setVisible(true);
  }
  function hideDrawer() {
    setVisible(false);
  }
  function onFormSubmit(data) {
    console.log(data);
  }
  function onDrawerSubmit() {
    formRef.current.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
    hideDrawer();
  }
  return (
    <>
      <Button icon={<HiOutlinePlus />} onClick={showDrawer}>
        New Employee
      </Button>
      <Drawer
        visible={visible}
        title="Create a new employee account"
        onRequestClose={hideDrawer}
        closable
        size={560}
        footer={
          <div className="flex items-center justify-end gap-x-3">
            <Button onClick={hideDrawer}>Cancel</Button>
            <Button buttonType="primary" onClick={onDrawerSubmit}>
              Submit
            </Button>
          </div>
        }
      >
        <Form
          layout={Form.Layout.VERTICAL}
          className="p-0"
          ref={formRef}
          onSubmit={onFormSubmit}
        >
          <div className="flex w-full space-x-4">
            <Form.Item name="firstName" label="First Name" className="flex-1">
              <Input placeholder="Enter first name" />
            </Form.Item>
            <Form.Item name="lastName" label="Last Name" className="flex-1">
              <Input placeholder="Enter last name" />
            </Form.Item>
          </div>
          <div className="flex w-full space-x-4">
            <Form.Item name="gender" label="Gender" className="flex-1">
              <Select
                options={["Male", "Female", "Other"]}
                placeholder="Select your gender"
                className="w-full"
              />
            </Form.Item>
            <Form.Item
              name="maritalStatus"
              label="Marital Status"
              className="flex-1"
            >
              <Select
                options={["Single", "Married"]}
                placeholder="Select your marital status"
                className="w-full"
              />
            </Form.Item>
          </div>
          <div className="flex w-full space-x-4">
            <Form.Item
              name="phoneNumber"
              label="Phone Number"
              className="flex-1"
            >
              <Input placeholder="Enter phone number" />
            </Form.Item>
            <Form.Item name="email" label="Email Address" className="flex-1">
              <Input placeholder="Enter email address" />
            </Form.Item>
          </div>
          <Form.Item name="pastExperience" label="Past Experience">
            <textarea
              className="w-full h-24 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2"
              placeholder="Please write employee's previous experience description"
            />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}
