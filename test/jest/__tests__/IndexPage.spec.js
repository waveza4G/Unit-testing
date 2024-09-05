import IndexPage from "src/pages/IndexPage.vue";
//src\pages\IndexPage.vue
import { shallowMount } from "@vue/test-utils";

describe("IndexPage", () => {
  it("ตรวจสอบหัวข้อ title", () => {
    const wrapper = shallowMount(IndexPage);
    let head = wrapper.find(".htmlClass h1");
    expect(head.exists()).toBe(true);

  })});
 
  

  it("ตรวจสอบตัวแปรชื่อว่า title", () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          title: "เช็คข้อมูลนักศึกษา",
         
        };
      },
    });
    let head = wrapper.find(".htmlClass h1");
    
  });
  it("ตรวจสอบตัวแปรชื่อว่า title", () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          title: "พรพิพัฒน์",
         
        };
      },
    });
    let head = wrapper.find(".htmlClass h1");
    
  });
  it("ตรวจสอบตัวแปรชื่อว่า title", () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          title: "พรมเสพสัก",
         
        };
      },
    });
    let head = wrapper.find(".htmlClass h1");
    
  });
  it("ตรวจสอบตัวแปรชื่อว่า title", () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          title: "6604101356",
         
        };
      },
    });
    let head = wrapper.find(".htmlClass h1");
    
  });
  it("ตรวจสอบตัวแปรชื่อว่า title", () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          title: "เวฟ",
         
        };
      },
    });
    let head = wrapper.find(".htmlClass h1");
    
  });
  

test("ทดสอบว่ามี ฟอร์ม (from)", () => {
  const wrapper = shallowMount(IndexPage);
  expect(wrapper.find("form").exists()).toBe(true);
});

test("ทดสอบว่าในฟอร์ม (from) มีการรับค่า (input)", () => {
  const wrapper = shallowMount(IndexPage);
  expect(wrapper.find("form > input").exists()).toBe(true);
});

test("ทดสอบว่ามีปุ่ม (button)", () => {
  const wrapper = shallowMount(IndexPage);
  expect(wrapper.find("button").exists()).toBe(true);
});