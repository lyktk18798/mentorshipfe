import React from "react";
function Todolist(){
    return (
        <div className="container d-flex justify-content-center mt-4">
        <div className="form p-4">
            <div className="heading ">
                <input type="checkbox" className="allCheck "/>
                <label  className="ml-1"><b>Checklist</b></label>
                <button className="clearAll btn btn-light btn-sm col-3 ">Xóa</button>
            </div>
            <div>
                <b className="percent">0%</b>
                <div className="progress ">
                    <div className="progress-bar pbar" role="progressbar"  aria-valuemin="" aria-valuemax="100"></div>
                  </div>
            </div>
            <div className="todoList pt-2"></div>
            <div className="addItem">
                <textarea name="" id="" cols="30" rows="3" className="inpuField mb-2 mt-3 p-2 w-100" placeholder="type sumthing"></textarea>
                <div >
                    <button className="addbtn btn btn-primary col-3 ">Thêm</button>
                    {/* <button className="cancle btn btn-light btn-outline-secondary col-3 ml-1" onClick="">Hủy</button> */}
                </div>
            </div>
        </div>
    </div>
    );
}
export default Todolist;