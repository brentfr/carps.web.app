import axios from "axios";
import { BACKEND_BASE_URL } from '../../utils/constants.js';

export function CurProfile({ userId, profilePicture, description }) {
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

    async function handleSubmit(e) {
        e.preventDefault()

        const pic = e.target.picture.files.length > 0 ?
            await toBase64(e.target.picture.files[0]) :
            ''

        axios.put(`${BACKEND_BASE_URL}/users`, {
            description: e.target.description.value,
            picture: pic
        })
            .then(_ => {
                location.reload()
            })
            .catch(e => {
                console.log(e)
            })
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-self-center">
                <div className="col-xxl-8">
                    <div>
                        <h4 className="mb-4 mt-0 btn btn-primary btn-lg">Profile Photo</h4>
                    </div>
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="row g-3 text-center justify-content-center align-self-center">
                            <img className="rounded-circle shadow-4-strong w-50 h-50" src={profilePicture} />
                            <div className="text-center">
                                <div className="square position-relative display-2 mb-3">
                                    <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
                                </div>
                                <input type="file" id="customFile" name="picture" hidden="" />
                                <label className="btn btn-success-soft btn-block" htmlFor="customFile">Upload</label>
                                <p className="text-muted mt-3 mb-0"><span className="me-1">Note:</span>Please use appropriate pictures</p>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="inputDescription" className="form-label">
                                <h4 className="mb-4 mt-0 btn btn-primary btn-lg">Description</h4>
                            </label>
                            <textarea type="text" className="form-control bg-primary" placeholder={description} name='description' id="inputDescription" rows="5"></textarea>
                        </div>
                        <div className="gap-3 d-md-flex justify-content-center text-center">
                            <label className="btn btn-primary btn-lg">
                                <input type="submit" />
                            </label>
                            <label className="btn btn-primary btn-lg">
                                <input type="reset" />
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
