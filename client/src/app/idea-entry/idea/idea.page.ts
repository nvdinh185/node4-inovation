import { Component, OnInit } from '@angular/core';
import { CommonsService, AuthService, DynamicFormMobilePage } from 'ngxi4-dynamic-service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.page.html',
  styleUrls: ['./idea.page.scss'],
})
export class IdeaPage implements OnInit {

  formIdea: any = {
    title: 'Phòng ý tưởng',
    ideas: []
  }

  // tham số để chọn tùy chọn nhập mới ý tưởng
  parameters: any;

  // danh sách ý tưởng

  dynamicFormInput: string;
  dynamicFormValue: string;
  dynamicCallback: any;


  isCardNewShow: boolean = false;

  constructor(
    private apiCommons: CommonsService
    , private apiAuth: AuthService
    , private mainService: MainService
  ) { }

  ngOnInit() {
    this.refresh();
  }

  async refresh() {
    try {
      this.parameters = await this.apiAuth.getDynamicUrl(this.apiAuth.serviceUrls.RESOURCE_SERVER + '/get-idea-parameters', true)
    } catch{ }

    let categoryOptions = this.parameters && this.parameters.ideas_categories ? this.parameters.ideas_categories : [];

    let statusOptions = this.parameters && this.parameters.ideas_statuses ? this.parameters.ideas_statuses : [];

    // form nhập liệu này
    this.dynamicFormInput = JSON.stringify({ // Form mẫu hiển thị nhập liệu tạo đối tượng jon_data
      okButton: { icon: "save", name: "Ý tưởng mới của bạn là gì?", color: "secondary", next: "CALLBACK", command: "ADD", url: this.apiAuth.serviceUrls.RESOURCE_SERVER + '/create-idea', token: true }
      ,
      cancelButton: { icon: "close", next: "CLOSE" }
      ,
      items: [
        // Danh sách các trường nhập liệu
        { type: "text", key: "title", name: "Chủ đề là gì? ", hint: "Nhập chủ đề của ý tưởng này từ 5-200 ký tự", input_type: "text", icon: "md-help", validators: [{ required: true, min: 5, max: 200 }] }
        , { type: "text_area", key: "description", name: "Mô tả nội dung ý tưởng của bạn từ 50 đến 1000 từ", hint: "Nhập mô tả ý tưởng của bạn", input_type: "text", icon: "md-information-circle", validators: [{ required: true, min: 10 }] }
        , { type: "select", key: "category_id", name: "Phân loại ý tưởng?", icon: "contrast", options: categoryOptions, color: "warning" }
        , { type: "select", key: "status", name: "Trạng thái của ý tưởng?", icon: "clock", options: statusOptions, color: "secondary" }
        // , { type: "image", key: "logo", name: "Chọn ảnh đại diện?"}
      ]
    })

    // giá trị mặc định
    this.dynamicFormValue = JSON.stringify(
      {
        title: '',
        description: '',
        category_id: '' + (categoryOptions.find(x => x.is_default === 1) ? categoryOptions.find(x => x.is_default === 1).id : 2),
        status: '' + (statusOptions.find(x => x.is_default === 1) ? statusOptions.find(x => x.is_default === 1).id : 2)
      }
    )

    this.dynamicCallback = this.dynamicCallbackCard;

    try {
      this.formIdea.ideas = await this.apiAuth.getDynamicUrl(this.apiAuth.serviceUrls.RESOURCE_SERVER + '/get-ideas')
    } catch{ }

    // Đã có danh sách ý tưởng mới lấy được từ csdl rồi

  }

  // hàm gọi lại xử lý ajax
  dynamicCallbackCard(ajaxItem) {
    return new Promise(resolve => {

      console.log(ajaxItem);

      let ajaxReturn = {
        key: 'name',
        property_name: 'value',
        new_data: 'Tên mới thay đổi từ ajax'
      }
      // or 
      // ajaxReturns = [{...ajaxReturn}]
      resolve(ajaxReturn);
    })
  }

  // hàm trả kết quả của form nhập mới ý tưởng
  onSelectedFinish(evt) {
    this.formIdea.ideas = evt && evt.response_data ? evt.response_data : this.formIdea.ideas;
    this.isCardNewShow = false;
  }


  // thêm mới ý tưởng
  onClickAddNew() {
    this.isCardNewShow = true;
  }


  // Đọc lại các ý tưởng mới
  doRefresh(evt) {
    setTimeout(() => {
      evt.target.complete();
    }, 1000);
  }

  // sự kiện bấm ở card ý tưởng
  // có mấy tình huống sinh ra bằng command
  onClickIdeaCard(evt) {
    if (evt) {
      if (evt.command === 'VIEW') {
        this.viewIdea(evt.idea);
      }
      if (evt.command === 'LIKE') {
        this.likeIdea(evt.idea);
      }
      if (evt.command === 'COMMENT') {
        this.commentIdea(evt.idea);
      }

    }
  }

  // Hiển thị item ý tưởng đó cho mọi người thông tin để biết
  viewIdea(item) {
    // mở ra một component để hiển thị thông tin ý tưởng, các chức năng như comment, like, share, edit, ... nằm ở component này
    // trước mắt giai đoạn 1 hiển thị như cửa số pop up
    // console.log("mở ý tưởng",item);
    let form = {
      title: "CHI TIẾT Ý TƯỞNG"
      , buttons: [
        { color: 'danger', icon: 'close', next: 'CLOSE' }
      ]
      , items: [
        { name: item.title, type: "title" }
        , {
          type: "details",
          details: [
            {
              name: "Mô tả:",
              value: item.description
            },
            {
              name: "Người tạo:",
              value: item.changed_username
            },
            {
              name: "Loại ý tưởng:",
              value: item.category_id
            },
            {
              name: "Trạng thái ý tưởng:",
              value: item.status
            },
            {
              name: "Thời gian tạo:",
              value: item.created_time,
              pipe_date: "HH:mm:ss dd/MM/yyyy"
            },
            {
              name: "Thời gian thay đổi:",
              value: item.changed_time,
              pipe_date: "HH:mm:ss dd/MM/yyyy"
            },
            {
              name: "Số người thích:",
              value: item.count_likes
            },
            {
              name: "Số ý kiến phản biện:",
              value: item.count_comments
            }
          ]
        }
      ]
    }

    // call popup window for form login
    this.apiCommons.openModal(DynamicFormMobilePage,
      {
        parent: this,                 // for dismiss child component
        callback: () => new Promise<any>(resolve => { resolve({ next: 'CLOSE' }) }), // function for callback process result of form
        form: form                    // form dynamic 
      }
    );
  }


  // Người dùng bấm nút like
  // Gửi lên máy chủ lệnh like từ token này
  likeIdea(item) {
    // id và token chứa user like id này
    this.apiAuth.postDynamicJson(this.apiAuth.serviceUrls.RESOURCE_SERVER + '/like-idea', { id: item.id }, true)
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  // người dùng bấm nút comment
  // mở cửa sổ ra lịch sử các comment để người dùng nhập comment
  commentIdea(item) {
    // mở màn hình comment
    let form = {
      title: "CHI TIẾT Ý TƯỞNG"
      , buttons: [
        { color: 'danger', icon: 'close', next: 'CLOSE' }
      ]
      , items: [
        { name: item.title, type: "title" }
        , {
          type: "details",
          details: [
            {
              name: "Mô tả:",
              value: item.description
            },
            {
              name: "Người tạo:",
              value: item.changed_username
            },
            {
              name: "Loại ý tưởng:",
              value: item.category_id
            },
            {
              name: "Trạng thái ý tưởng:",
              value: item.status
            },
            {
              name: "Thời gian tạo:",
              value: item.created_time,
              pipe_date: "HH:mm:ss dd/MM/yyyy"
            },
            {
              name: "Thời gian thay đổi:",
              value: item.changed_time,
              pipe_date: "HH:mm:ss dd/MM/yyyy"
            },
            {
              name: "Số người thích:",
              value: item.count_likes
            },
            {
              name: "Số ý kiến phản biện:",
              value: item.count_comments
            }
          ]
        }
        , { type: "text_area", key: "comment", name: "Nội dung góp ý", hint: "Nhập góp ý", input_type: "text", icon: "md-information-circle", validators: [{ required: true}] }
        ,
          {
            type: "button"
            , options: [
              { name: "Gửi", url:this.apiAuth.serviceUrls.RESOURCE_SERVER+'/comment-idea', next:'CALLBACK'}
            ]
          }
      ]
    }

    // call popup window for form login
    this.apiCommons.openModal(DynamicFormMobilePage,
      {
        parent: this,                 // for dismiss child component
        callback: () => this.callbackComments, // function for callback process result of form
        form: form                    // form dynamic 
      }
    );
  }


  callbackComments = function (res) {
    return new Promise<any>((resolve, reject) => {

      if (res.error) {
        this.apiCommons.presentAlert('Error:<br>' + (res.message ? res.message : "Error Unknow: " + JSON.stringify(res.error, null, 2)));
      } else if (res.response_data) {
        // kết quả nhập comment
         
      }
      resolve({ next: "CLOSE" });
    });
  }.bind(this);

}
