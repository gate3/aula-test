
const mockMusicUpload = {
	upload: jest.fn((params) =>Promise.resolve({status: true, data:{newFileName: '', fileUrl: ''}})) 
};

module.exports = {
	mockMusicUpload,
};
