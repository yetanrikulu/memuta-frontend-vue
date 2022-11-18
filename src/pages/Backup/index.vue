<template>
  <div class="backups">
    <div
        v-for="item in backups"
        :key=item.Sheep
    >
      <BackupItem
          :title=item.title
          :delete-url=item.deleteUrl
          :upload-url=item.uploadUrl
          :download-url=item.downloadUrl
      />
    </div>

  </div>
</template>

<script>
import BackupItem from "@/pages/Backup/BackupItem";
import backups from "@/pages/Backup/backups";

export default {
  name: 'BackupPage',
  data() {
    return {
      backups: backups,
    }
  },
  components: {
    BackupItem
  },
  methods: {}
}


</script>

<style lang="scss" scoped>
.backups{
  display: flex;
  justify-content: center;
  flex-direction: row ;
  margin: 100px;
}
</style>
