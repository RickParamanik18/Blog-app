import styles from "../styles/specificblogpage.module.css"
import pic from "../assets/avatar.png"
import { Link } from "react-router-dom";
const SpecificBlogPage = ()=>{
    return (
        <div className={styles.blog}>
            <div className="h1 text-center">This is a log heading about a blog</div>
            <div className={styles.author}>
                <div className="pic">
                    <img src={pic} alt="" />
                </div>
                <span> Rick paramanik</span>
            </div>
            <div className={styles.content}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi quidem tempora, quas minima dolore autem sint nesciunt nihil exercitationem tenetur optio excepturi explicabo obcaecati rerum, ullam aliquam doloribus impedit!
                Dolorem sapiente qui animi, dolore accusamus quos quas, hic ipsam porro cumque ipsum nemo dicta. Facilis, porro sapiente perferendis similique blanditiis incidunt nulla impedit. Veritatis corrupti earum non eius reprehenderit?
                Sunt at atque, a recusandae esse ut similique tempore aperiam possimus perspiciatis incidunt reprehenderit modi natus molestias nulla maiores quo quam quisquam deleniti voluptatem aspernatur, cum neque ipsam. Dolor, tempora?
                Fuga debitis error suscipit et atque. Nisi tempora ratione quia sunt nobis vero in architecto sequi fuga saepe veritatis, ducimus consectetur rem quidem maiores corrupti, dolore quaerat unde perferendis adipisci?
                Eveniet quae sunt molestiae autem, doloremque at tempora culpa nulla dolorum aspernatur, impedit corporis soluta architecto labore laboriosam, dignissimos rem. Aliquam, accusantium. Quae expedita debitis nam deserunt hic ratione neque.
                Itaque, odio exercitationem dicta repellat quaerat architecto fugit quam tenetur necessitatibus blanditiis consectetur, hic nisi! Quisquam eaque, libero similique mollitia praesentium, ut porro obcaecati quos ad inventore sapiente dolorem explicabo.
                Esse facilis, in provident, suscipit culpa possimus eos labore eaque laboriosam quia maxime omnis laborum! Eum quo inventore blanditiis quae repellendus commodi assumenda officiis vel, odit maxime magni modi at!
                Autem rerum error culpa, alias sit, molestias nulla laborum libero molestiae et voluptatibus inventore ad porro exercitationem quia veritatis? Dolore quasi iusto reiciendis cumque cupiditate numquam illo hic saepe in.
                Reiciendis exercitationem possimus earum quam aliquam expedita? Eius atque dicta mollitia vero omnis laborum minima, qui repudiandae consequuntur. Quo accusantium reprehenderit esse ipsum suscipit voluptatum facilis corrupti numquam aspernatur velit!
                Ducimus deserunt nisi ea veniam? Iure, sequi. Voluptas qui, eaque assumenda officiis odio eius ut voluptatem unde cum harum quo incidunt quaerat porro impedit natus quam similique reprehenderit dolor deleniti?
                Eos ab dicta eius quisquam, esse fuga asperiores voluptatibus distinctio, recusandae qui doloremque provident, architecto deserunt soluta ad consectetur labore atque modi. Facere, harum dolor officia voluptate sunt atque minus.
                Aliquid mollitia asperiores fugiat? Repellendus quaerat natus esse, eligendi saepe ipsam optio provident quasi labore tempore, corporis accusamus vel fuga dignissimos incidunt aut mollitia quisquam, nulla facere? Commodi, distinctio ut?
                Tempora corporis, tempore debitis possimus modi aut aliquam deserunt aperiam. Aperiam, sit magnam? Distinctio ducimus hic nesciunt natus veritatis soluta, id aut, modi eos porro eius, quidem laborum laboriosam esse.
                Consectetur illum porro, nam consequatur ut, nobis ducimus, error expedita cupiditate dolores magni. Dicta omnis, non, laudantium quidem quos consequatur cumque quia minus at maiores illo similique, ab adipisci sed.
                Facere quod doloremque, debitis commodi nulla eaque voluptas exercitationem eum aut. Expedita vitae impedit modi exercitationem necessitatibus, nemo laudantium, minus temporibus inventore voluptates aut eveniet quam! Ipsum, aperiam accusantium! Perferendis?
                Vel, assumenda laudantium, consequatur quo praesentium est neque incidunt, itaque autem molestiae cupiditate culpa consectetur similique quidem quibusdam. Voluptatem nostrum in nam ea autem suscipit illo atque ex saepe doloremque!
                Velit quam ullam numquam, optio libero rem mollitia dolorem ipsam culpa. Corrupti, vel necessitatibus aut sequi tempora odio molestias quibusdam sint dolor unde soluta maiores debitis sed consequuntur mollitia error?
                Impedit, aliquam blanditiis, nam eaque debitis fugit in sit ex ducimus architecto porro ea. Enim, optio minus! Expedita, neque. Impedit possimus itaque obcaecati totam consequatur, veritatis dolorem nobis blanditiis dolore.
                Molestiae sit odio pariatur ipsum et deserunt, voluptatum nihil rerum, commodi quaerat, illum eveniet architecto vitae veniam. Eos deserunt non totam, repudiandae adipisci cupiditate voluptate asperiores culpa. In, minus odit!
                Voluptatum maiores, provident consectetur explicabo at doloribus, cumque aut natus autem rem, tenetur eos modi non! Odit suscipit odio aut consequatur, dolorum mollitia placeat pariatur officia doloremque assumenda! Eveniet, porro?
            </div>
            <div className={styles.tags}>
                <span className="h3">Tags: &nbsp;</span>
                <div>
                    <span>Tech</span>
                    <span>Nature</span>
                </div>

            </div>
        </div>
    );
}
export default SpecificBlogPage