# 📚 Hướng dẫn các lệnh Git để upload source code

## 🔄 Quy trình cơ bản (3 bước)

```bash
# Bước 1: Add files
git add .

# Bước 2: Commit với message
git commit -m "mô tả thay đổi"

# Bước 3: Push lên GitHub
git push origin master
```

## 📋 Các lệnh Git chi tiết

### 1. Kiểm tra trạng thái
```bash
# Xem files nào đã thay đổi
git status

# Xem chi tiết nội dung thay đổi
git diff

# Xem lịch sử commit
git log --oneline
```

### 2. Add files (Thêm vào staging)

```bash
# Add TẤT CẢ files đã thay đổi
git add .

# Add từng file cụ thể
git add src/App.jsx
git add package.json

# Add tất cả files .js
git add *.js

# Add toàn bộ thư mục
git add src/

# Add nhiều files cùng lúc
git add file1.js file2.css file3.html
```

### 3. Commit (Lưu thay đổi)

```bash
# Commit với message ngắn
git commit -m "feat: add new feature"

# Commit với message dài hơn
git commit -m "feat: add user authentication" -m "Added login and register pages"

# Commit tất cả files đã modified (bỏ qua git add)
git commit -am "fix: resolve bug"
```

### 4. Push (Upload lên GitHub)

```bash
# Push lên branch master
git push origin master

# Push lên branch main
git push origin main

# Push lần đầu tiên (set upstream)
git push -u origin master

# Force push (NGUY HIỂM - chỉ dùng khi cần thiết)
git push -f origin master
```

## 📝 Các lệnh Git nâng cao

### Hoàn tác thay đổi

```bash
# Hủy thay đổi của 1 file (chưa add)
git restore src/App.jsx

# Unstage file (đã add nhưng chưa commit)
git restore --staged src/App.jsx

# Hoàn tác commit cuối cùng (giữ lại thay đổi)
git reset --soft HEAD~1

# Hoàn tác commit cuối cùng (xóa luôn thay đổi)
git reset --hard HEAD~1
```

### Branch (Nhánh)

```bash
# Xem tất cả branches
git branch

# Tạo branch mới
git branch feature/new-feature

# Chuyển sang branch khác
git checkout feature/new-feature

# Tạo và chuyển sang branch mới (1 lệnh)
git checkout -b feature/new-feature

# Xóa branch
git branch -d feature/old-feature

# Push branch lên GitHub
git push origin feature/new-feature
```

### Pull (Lấy code mới từ GitHub)

```bash
# Pull code mới về
git pull origin master

# Pull và rebase
git pull --rebase origin master

# Fetch (chỉ tải về, chưa merge)
git fetch origin
```

### Stash (Cất code tạm thời)

```bash
# Cất code đang làm dở
git stash

# Xem danh sách stash
git stash list

# Lấy code từ stash ra
git stash pop

# Xóa stash
git stash drop
```

## 🎯 Commit Message Convention

### Format chuẩn:
```
<type>: <subject>

<body (optional)>
```

### Types phổ biến:
- `feat:` - Thêm feature mới
- `fix:` - Sửa bug
- `docs:` - Thay đổi documentation
- `style:` - Format code (không ảnh hưởng logic)
- `refactor:` - Refactor code
- `test:` - Thêm/sửa tests
- `chore:` - Maintenance tasks
- `perf:` - Cải thiện performance

### Ví dụ:
```bash
git commit -m "feat: add user login page"
git commit -m "fix: resolve button click issue"
git commit -m "docs: update README with installation steps"
git commit -m "style: format code with prettier"
git commit -m "refactor: simplify authentication logic"
git commit -m "test: add unit tests for App component"
git commit -m "chore: update dependencies"
git commit -m "perf: optimize image loading"
```

## 🚀 Quy trình Upload Code hoàn chỉnh

### Kịch bản 1: Thêm code mới

```bash
# 1. Kiểm tra trạng thái
git status

# 2. Add tất cả files mới
git add .

# 3. Commit với message rõ ràng
git commit -m "feat: add new dashboard page"

# 4. Push lên GitHub
git push origin master

# 5. Xác nhận đã push thành công
git log --oneline -3
```

### Kịch bản 2: Sửa bug

```bash
# 1. Sửa code trong file

# 2. Kiểm tra thay đổi
git diff

# 3. Add file đã sửa
git add src/components/Button.jsx

# 4. Commit
git commit -m "fix: resolve button hover effect"

# 5. Push
git push origin master
```

### Kịch bản 3: Update nhiều files

```bash
# 1. Xem tất cả files đã thay đổi
git status

# 2. Add tất cả
git add .

# 3. Commit với message chi tiết
git commit -m "feat: redesign user interface" -m "- Updated App.jsx with new layout\n- Modified styles in App.css\n- Added new components"

# 4. Push
git push origin master
```

## ⚠️ Lưu ý quan trọng

### ✅ NÊN:
- Commit thường xuyên với messages rõ ràng
- Pull code mới trước khi push
- Kiểm tra `git status` trước khi commit
- Test code trước khi push
- Sử dụng branches cho features mới

### ❌ KHÔNG NÊN:
- Commit code chưa test
- Commit files không cần thiết (node_modules, .env)
- Force push lên branch chính
- Commit messages không rõ ràng như "update", "fix"
- Push trực tiếp lên master với code chưa review

## 🆘 Các lỗi thường gặp

### Lỗi: "failed to push some refs"
```bash
# Giải pháp: Pull code mới trước
git pull origin master
git push origin master
```

### Lỗi: "Your branch is behind"
```bash
# Giải pháp: Pull code về
git pull origin master
```

### Lỗi: Conflict khi merge
```bash
# 1. Xem files conflict
git status

# 2. Sửa files conflict (mở file và chọn code giữ lại)

# 3. Add files đã sửa
git add .

# 4. Commit
git commit -m "fix: resolve merge conflict"

# 5. Push
git push origin master
```

## 🔗 Tài liệu tham khảo

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Tip:** Lưu file này để tham khảo khi cần! 📌

