
- [x] remind me (@[[2025-10-16]])
___

Use [[gsutil]] tool to upload to buckets.

```sh
 gsutil -m cp -r . "gs://malegacy-static-dev/oov-test/"
```

___

   gsutil  is a command-line tool for interacting with Google Cloud Storage
  (GCS). It's a part of the Google Cloud SDK and allows users to manage their
  GCS buckets, objects, and permissions.

  ### Key Features of gsutil

  1. Object Management: Create, delete, and manage objects in GCS.
  2. Bucket Management: Create, delete, and manage buckets in GCS.
  3. Permission Management: Set and manage access controls on GCS objects and
  buckets.
  4. Data Transfer: Download and upload data from/to GCS using  gsutil
  commands.
  5. Storage Inventory: Retrieve information about the objects and buckets in
  your GCS account.

  ### Basic Commands

  Here are some basic  gsutil  commands:

  #### 1.  gsutil ls  - List Objects and Buckets

    gsutil ls

  Lists all objects and buckets in the current default GCS project.

  #### 2.  gsutil mb  - Create a Bucket

    gsutil mb gs://my-bucket

  Creates a new bucket named  my-bucket  in the current default GCS project.

  #### 3.  gsutil cp  - Copy Object

    gsutil cp /path/to/local/file gs://my-bucket/object.txt

  Copies a local file to a GCS object.

  #### 4.  gsutil rm  - Delete Object

    gsutil rm gs://my-bucket/object.txt

  Deletes the GCS object  object.txt  from the bucket  my-bucket .

  #### 5.  gsutil rsync  - Synchronize Object

    gsutil rsync /path/to/local/dir gs://my-bucket/remote-dir

  Synchronizes the local directory with the remote GCS directory.

  ### Example Workflow

  Here's a simple example workflow that demonstrates how to use  gsutil  to
  manage GCS objects and buckets:

  6. Create a Bucket:

    gsutil mb gs://my-bucket

  7. Upload an Object:

    gsutil cp /path/to/local/file gs://my-bucket/object.txt

  8. List Objects:

    gsutil ls gs://my-bucket

  9. Delete an Object:

    gsutil rm gs://my-bucket/object.txt

  10. Transfer Data:

    gsutil cp gs://my-bucket/object.txt /path/to/local/dir

  This example workflow demonstrates how to create a GCS bucket, upload an
  object, list objects, delete an object, and transfer data.

  ### Tips and Best Practices

  • Use  gsutil -h  to view the help documentation for  gsutil  commands.
  **• Use  gsutil -m  to enable multi-threading for faster execution.**
  **• Use  gsutil -d  to debug output for verbose logging.**
  • Use  gsutil **-q**  to perform quiet operations without prompting for user
  input.
  
  • Use  gsutil acl  to manage access controls on GCS objects and buckets.
  • Use  gsutil versioning  to manage and configure object versioning on GCS
  objects.