<template>
  <div class="others__content">
    <div class="others__cage">
      <HeaderDownloadTemplateUpload
          v-for="item in headerDownloadTemplateUploadList"
          :key="item.title"
          :title="item.title"
          :upload-url="item.uploadUrl"
          :download-url="item.downloadUrl"
      />
      <HeaderInputDownload
          v-for="item in headerInputDownloadList"
          :key="item.title"
          :title="item.title"
          :button-download-url="item.buttonDownloadUrl"
          :input-place-holder="item.inputPlaceHolder"
      />
    </div>
  </div>
</template>

<script>
import HeaderDownloadTemplateUpload from "@/pages/Excel/Others/HeaderDownloadTemplateUpload";
import HeaderInputDownload from "@/pages/Excel/Others/HeaderInputDownload";

export default {
  name: 'Operations',
  components: {
    HeaderInputDownload,
    HeaderDownloadTemplateUpload
  },
  data() {
    return {
      headerDownloadTemplateUploadList: [
        {
          title: "Ağırlık İşlemler",
          downloadUrl: "weight-excel-template",
          uploadUrl: "set-weight"
        },
        {
          title: "İlçe Tarım Küpesi",
          downloadUrl: "county-farm-registration-excel",
          uploadUrl: "get-county-farm-registration-by-excel"
        },
        {
          title: "Son iki tartım",
          downloadUrl: "last-two-weight-template",
          uploadUrl: "get-last-two-weight-by-excel"
        },
        {
          title: "Boş Küpe Numaraları",
          downloadUrl: "last-two-weight-template",
          uploadUrl: "get-last-two-weight-by-excel"
        },
      ],
      headerInputDownloadList: [
        {
          title: "Tek Koyun Excel Olarak",
          inputPlaceHolder: "Küpe Numarası",
          buttonDownloadUrl: "sheep-excel",
        },
        {
          title: "En Az",
          inputPlaceHolder: "Günlük Hayvan",
          buttonDownloadUrl: "sheep-excel/at-least-days-sheep",
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.others {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px
  }

  &__cage {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 10px;
    column-gap: 10px;
    row-gap: 20px;
  }


}
</style>