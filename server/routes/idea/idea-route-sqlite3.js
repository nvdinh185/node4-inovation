const router = require('express').Router();

const postHandler = require('../../utils/post-handler');

const userHandler = require('../../handlers/idea/sqlite3/user-handler-sqlite3')
const listHandler = require('../../handlers/idea/sqlite3/list-handler-sqlite3')
const ideaHandler = require('../../handlers/idea/sqlite3/idea-handler-sqlite3')
const reviewIdeaHandler = require('../../handlers/idea/sqlite3/idea-review-handler')

// thực hiện xác thực token user đã được cấp
const jwtTokenVerify = require('../../utils/jwt-token-verify');

const adminHandler = require("../../handlers/idea/sqlite3/admin-handler");

router.get('/get-user-info'
    , jwtTokenVerify                // xác thực token
    , userHandler.getUserInfo       // dựa vào giá trị req.user.username trả thông tin user
)

// 2. Trang login mở ra form nhập thông tin cá nhân để tạo user mới
router.post('/create-user'
    , jwtTokenVerify                // nhúng xác thực token trước khi cho xử lý tiếp
    , postHandler.jsonProcess       // trả về req.json_data {thông tin của user}
    , userHandler.createNewUser     // tạo user mới
    , userHandler.getUserInfo       // trả thông tin user đã đăng ký
)

// 3. Sửa thông tin cá nhân (kể cả update thông tin avatar & background)
router.post('/edit-user'
    , jwtTokenVerify                // nhúng xác thực token trước khi cho xử lý tiếp
    , postHandler.jsonProcess       // trả về req.json_data {thông tin của user}
    , userHandler.editUser          // Sửa thông tin cá nhân
    , userHandler.getUserInfo       // trả thông tin user đã đăng ký
)

// ------- các chức năng phía trên yêu cầu phải được phân quyền và kiểm soát bởi jwt---//

// -- các chức năng truy vấn danh mục -----
router.get('/get-idea-parameters'
    // , jwtTokenVerify                      // xác thực token, sẽ trả về req.user.username (hoặc username - nếu khai báo trong hàm sign)
    , listHandler.getListParameters       // trả về danh mục tham số của user đang thuộc tổ chức đó
)

// -- các chức năng cho ý tưởng chính -----

// lấy các ý tưởng hiện có để hiển thị ra
router.get('/get-ideas'
    , jwtTokenVerify                      // xác thực token, sẽ trả về req.user.username (hoặc username - nếu khai báo trong hàm sign)
    , ideaHandler.getIdeas                // trả về danh sách ý tưởng
)

// lấy thông tin user đã đánh giá idea hay chưa
router.get('/user-mark-idea'
    , jwtTokenVerify                // nhúng xác thực token trước khi cho xử lý tiếp
    , userHandler.getUserId         // trả về req.user.id và req.user.username
    , ideaHandler.getUserMarkIdea   // trả về thông tin user đã đánh giá hay chưa
)

// tạo ý tưởng mới
router.post('/create-idea'
    , jwtTokenVerify                // nhúng xác thực token trước khi cho xử lý tiếp
    , userHandler.getUserId         // trả về req.user.id và req.user.username
    , postHandler.formProcess       // trả về req.form_data {thông tin của user}
    , ideaHandler.createIdea        // tạo idea mới
)

// sửa ý tưởng -- cập nhập trạng thái ...
router.post('/edit-idea'
    , jwtTokenVerify                // nhúng xác thực token trước khi cho xử lý tiếp
    , postHandler.formProcess       // trả về req.json_data {thông tin của idea}
    , ideaHandler.editIdea          // sửa idea mới
)

// lấy chỉ tiết một ý tưởng để tương tác
router.get('/get-idea'
    , jwtTokenVerify                      // xác thực token, sẽ trả về req.user.username (hoặc username - nếu khai báo trong hàm sign)
    , ideaHandler.getIdea                // trả về chi tiết của ý tưởng đó
)

// like ý tưởng
router.post('/like-idea'
    , jwtTokenVerify                // nhúng xác thực token trước khi cho xử lý tiếp
    , userHandler.getUserId         // trả về req.user.id và req.user.username
    , postHandler.jsonProcess       // trả về req.json_data {thông tin của idea}
    , ideaHandler.likeIdea          // like idea trả về req.ideaId
    , ideaHandler.getIdea           // trả thông tin idea
)

// comment ý tưởng
router.post('/comment-idea'
    , jwtTokenVerify                // nhúng xác thực token trước khi cho xử lý tiếp
    , userHandler.getUserId         // trả về req.user.id và req.user.username
    , postHandler.formProcess       // trả về req.form_data {thông tin của idea}
    , ideaHandler.commentIdea       // comment idea
    , ideaHandler.getIdea           // trả thông tin idea
)

// đánh giá ý tưởng - cho điểm
router.post('/mark-idea'
    , jwtTokenVerify                // nhúng xác thực token trước khi cho xử lý tiếp
    , userHandler.getUserId         // trả về req.user.id và req.user.username
    , postHandler.jsonProcess       // trả về req.json_data {thông tin của idea}
    , ideaHandler.markIdea          // comment idea
    , ideaHandler.getIdea           // trả thông tin idea
)


// lấy log sql
router.get('/get-sql-logs'
    , jwtTokenVerify                     // xác thực token, sẽ trả về req.user.username (hoặc username - nếu khai báo trong hàm sign)
    , listHandler.getSqlLogs
)

// lấy danh sách câu hỏi để đánh giá
router.get('/get-questions'
    , jwtTokenVerify                      // xác thực token, sẽ trả về req.user.username (hoặc username - nếu khai báo trong hàm sign)
    , listHandler.getQuestions
)

// get file id array ?id_list=[1,2,3,4]
router.get('/get-attach-files'
    , jwtTokenVerify                         // xác thực token, sẽ trả về req.user.username (hoặc username - nếu khai báo trong hàm sign)
    , listHandler.getIdeasAttachs            // trả về danh sách tên file đường dẫn cần lấy
)

// đọc dữ liệu 1 file trả kết quả về client mở file ra
router.get('/get-file-id'
    // , jwtTokenVerify                      // xác thực token, sẽ trả về req.user.username (hoặc username - nếu khai báo trong hàm sign)
    , listHandler.getFileAttach              // trả về dữ liệu file thực tế
)

//------ thực thi lệnh trực tiếp không cho phân quyền --- chỉ dev mới thực thi được


router.get('/get-cat-ideas-total'
    // , jwtTokenVerify                      // xác thực token, sẽ trả về req.user.username (hoặc username - nếu khai báo trong hàm sign)
    , listHandler.getCatIdeaTotal
)

router.get('/get-user-ideas-cat-total'
    // , jwtTokenVerify                      // xác thực token, sẽ trả về req.user.username (hoặc username - nếu khai báo trong hàm sign)
    , listHandler.getCatUserIdeaTotal
)

// ----- Các hàm liên quan tới chức năng review (đánh giá hội đồng)
router.post('/add-review'
    , jwtTokenVerify                        // xác thực token, sẽ trả về req.user.username (hoặc username - nếu khai báo trong hàm sign) này)
    , userHandler.getUserId                 // trả về req.user.id và req.user.username
    // dữ liệu lấy câu lệnh ở đây
    , postHandler.formProcess               // lay form_data
    //chèn yêu cầu phân quyền để thực hiện việc này
    , adminHandler.setFunctionFromPath      //thiet lap chuc nang tu pathName
    , adminHandler.checkFunctionRole        //kiem tra quyen co khong de cho phep
    // Gửi câu lệnh sql trực tiếp lên csdl để thực thi
    , reviewIdeaHandler.addReview           // thực thi lệnh sql
);

router.get('/get-reviews'
    // , jwtTokenVerify                      // xác thực token, sẽ trả về req.user.username (hoặc username - nếu khai báo trong hàm sign)
    , reviewIdeaHandler.getReviews
)

router.get('/get-review-detail'
    // , jwtTokenVerify                      // xác thực token, sẽ trả về req.user.username (hoặc username - nếu khai báo trong hàm sign)
    , reviewIdeaHandler.getReviewDetail
)

router.post('/add-idea-prize'
    , jwtTokenVerify                        // nhúng xác thực token trước khi cho xử lý tiếp
    , userHandler.getUserId
    , postHandler.jsonProcess               // trả về req.json_data {thông tin của idea}
    , reviewIdeaHandler.addIdeaPrize        // thêm đánh giá ý tưởng
)

// lấy ý tưởng về theo bộ lọc
router.get('/get-my-idea'
    , jwtTokenVerify                        // xác thực token, sẽ trả về req.user.username (hoặc username - nếu khai báo trong hàm sign)
    , listHandler.getMyIdea
)

module.exports = router;