signals:
  void certificateChanged(StorageId, StorageChange);
  void keyChanged(StorageId, StorageChange);
  void applicationCertificateChanged(StorageId, StorageChange);
  void layoutChanged(StorageId, LayoutGroup, Domain, StorageChange);
  void historicServerConnectionChanged(StorageId, StorageChange);
  void kvChanged(QString, Domain, StorageChange);

enum class StorageChange {
    Created,
    Modified,
    Deleted,
};
