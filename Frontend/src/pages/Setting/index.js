import BreadCrumb from '../../components/BreadCrumb';
import InputGroup from '../../components/InputGroup';

function Seeting() {
    const options = [
        { value: "Nam", label: "Nam" },
        { value: "Nữ", label: "Nữ" }
    ];
    return (
        <>
            <BreadCrumb
                namePage={"Cá nhân"}
            />

            <div className="container-fluid mb-5">
                <div className="card p-4 shadow">
                    <h5 className="card-title text-primary mb-3">Thông tin cá nhân</h5>
                    <form className='card-body'>
                        <div className=" row row-cols-md-2">
                            <InputGroup
                                id={"email"}
                                type={"email"}
                                nameLabel={"Email"}
                            />
                            <InputGroup
                                id={"name"}
                                type={"text"}
                                nameLabel={"Họ và tên"}
                            />
                        </div>
                        <div className="row row-cols-md-2">
                            <InputGroup
                                id={"gender"}
                                type={"select"}
                                nameLabel={"Giới tính"}
                                options={options}
                            />
                            <InputGroup
                                id={"date"}
                                type={"date"}
                                nameLabel={"Ngày sinh"}
                            />
                        </div>
                        <div className="row row-cols-md-2">
                            <InputGroup
                                id={"phone"}
                                type={"number"}
                                nameLabel={"Số điện thoại"}
                            />
                            <InputGroup
                                id={"address"}
                                type={"text"}
                                nameLabel={"Địa chỉ"}
                            />
                        </div>
                        <div className='d-flex justify-content-end mt-3'>
                            <button
                                type='submit'
                                className='btn btn-primary'
                            >
                                Thay đổi thông tin
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="container-fluid mb-5">
                <div className="card p-4 shadow">
                    <h5 className="card-title mb-3 text-primary">Thay đổi mật khẩu</h5>
                    <form className='card-body'>
                        <div class="form-floating col-lg-8 mb-3">
                            <input type="password" class="form-control" id="currentPass" placeholder="name@example.com" />
                            <label for="currentPass">Nhập mật khẩu hiện tại</label>
                        </div>
                        <div class="form-floating col-lg-8 mb-3">
                            <input type="password" class="form-control" id="newPass" placeholder="name@example.com" />
                            <label for="newPass">Nhập mật khẩu mới</label>
                        </div>
                        <div class="form-floating col-lg-8 mb-3">
                            <input type="password" class="form-control" id="confirmNewPass" placeholder="name@example.com" />
                            <label for="confirmNewPass">Nhập lại mật khẩu mới</label>
                        </div>
                        <div className='d-flex justify-content-end mt-1'>
                            <button
                                type='submit'
                                className='btn btn-primary'
                            >
                                Cập nhật mật khẩu
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
}

export default Seeting;
